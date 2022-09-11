export const getAllType = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/trending/all/week?api_key=40b7d7ad3c8844f77205bb922bab6d0f",
    {
      method: "GET",
    }
  );
  const data = await res.json();
  console.log(data);
  return data;
  //   .then((res) => res.json().then((data) => console.log(data)));
};
// export default getAllType;
