import { useState } from "react";
import InputMask from "react-input-mask";

const Modal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  if (!isOpen) return null;

  const validatePhone = (phone) => {
    const phoneRegex = /^\+?\d{3}\s\d{2}\s\d{3}-\d{2}-\d{2}$/;
    return phoneRegex.test(phone);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handlePhoneInput = (e) => {
    const { value } = e.target;
    setFormData((prev) => ({ ...prev, phone: value }));
    setErrors((prev) => ({ ...prev, phone: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, phone, email } = formData;

    const newErrors = {};
    if (!name.trim()) newErrors.name = "Поле обязательно к заполнению";
    if (!phone.trim()) {
      newErrors.phone = "Поле обязательно к заполнению";
    } else if (!validatePhone(phone)) {
      newErrors.phone = "Некорректный формат данных";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const formattedPhone = phone.replace(/\D/g, "");
      setIsSubmitting(true);
      console.log("Отправка данных", JSON.stringify({
        u_name: name,
        u_phone: formattedPhone,
        u_email: email,
        source: "заявка с visavam.by лэндинга"
      }, null, 2));
      // Запрос в API
      const response = await fetch("https://api.u-on.ru/tCjYa5IOpS143s3V6w4j/lead/create.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          u_name: name,
          u_phone: formattedPhone,
          u_email: email,
          source: "заявка с visavam.by лэндинга",
        }),
      });

      const responseData = await response.json();

      console.log("Ответ API", responseData);

      if (!response.ok) {
        console.log("Ошибка в ответе API", responseData);
        throw new Error(responseData?.message || "Ошибка отправки данных");
      }

      setMessage("Заявка успешно отправлена. С Вами свяжутся в ближайшее время.");
    } catch (error) {
      console.log("Ошибка отправки данных", error);
      setMessage(
        "Произошла ошибка при отправке заявки. Приносим извинения за неудобства. Попробуйте повторно позже."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-[2px] shadow-lg max-w-md w-full relative">
        <button
          className="absolute top-2 right-2 text-[#F86F00] font-bold text-lg"
          onClick={onClose}
        >
          <img src="/close.svg" alt="Закрыть" />
        </button>
        <h2 className="text-2xl font-medium mb-4">Оформить заявку</h2>
        {message && (
          <div className="mb-4 p-4 bg-gray-100 text-center rounded">
            {message}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Имя*"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-[2px] p-2`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div className="mb-4">
            <InputMask
              mask="+999 99 999-99-99"
              name="phone"
              placeholder="Телефон*"
              value={formData.phone}
              onChange={handlePhoneInput}
              className={`w-full border ${
                errors.phone ? "border-red-500" : "border-gray-300"
              } rounded-[2px] p-2`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-[2px] p-2"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className={`py-3 px-4 rounded-[2px] w-[220px] ${
                isSubmitting
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-customBlue hover:bg-blue-700 text-white"
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Отправка..." : "Оформить заявку"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;