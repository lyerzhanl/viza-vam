const CallTooAction = () => {
  return (
    <div className="py-40 px-[5%] flex flex-col items-center">
      <h2 className="text-2xl font-medium mb-4 text-center">Остались вопросы?</h2>
      <h2 className="text-2xl font-medium mb-6 text-center">Оформите заявку, и наши специалисты свяжутся<br/>с Вами в ближайшее
        время.</h2>
      <button className="bg-customBlue hover:bg-blue-500 text-white py-2 px-4 rounded-[2px]">
        Оформить заявку
      </button>
    </div>
  );
};

export default CallTooAction;