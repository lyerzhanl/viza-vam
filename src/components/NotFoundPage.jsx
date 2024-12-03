const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl mt-2">Здесь ничего нет...</p>
      <a href="/" className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Вернуться на главную
      </a>
    </div>
  );
};

export default NotFoundPage;