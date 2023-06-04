const getFirestoreData = async () => {
  const res = await fetch("/api/users/");
  if (!res.ok) {
    throw Error(res.statusText);
  }
  const data = await res.json();
  return data;
};

export default getFirestoreData;
