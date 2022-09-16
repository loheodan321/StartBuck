const useFetch = () => {
  const fetchData = async (url, method, head, data) => {
    try {
      const res = await fetch(url, {
        method: method ? method : "GET",
        headers: head ? head : {},
        body: data ? JSON.stringify(data) : null,
      });

      if (!res.ok) {
        throw new Error();
      }

      const fullData = await res.json();

      return fullData;
    } catch (error) {
      console.log(error);
    }
  };

  return { getData: fetchData };
};

export default useFetch;
