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
};

export const Movies = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/trending/movie/week?api_key=40b7d7ad3c8844f77205bb922bab6d0f",
    {
      method: "GET",
    }
  );
  const data = await res.json();
  console.log(data);
  return data;
};
