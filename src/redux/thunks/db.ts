import { getDatabase, onValue, ref, set } from "firebase/database";

export function writeData<T>(
  userId: string | undefined,
  name: string,
  value: T,
  query: string
) {
  const db = getDatabase();
  set(ref(db, query + userId), {
    [name]: value,
  });
}

export function readData<T>(
  setState: (value: React.SetStateAction<T>) => void,
  userId: string | undefined,
  query: string,
  value: string
) {
  const db = getDatabase();
  const starCountRef = ref(db, query + userId);
  onValue(starCountRef, (snapshot) => {
    const data: T = snapshot.val()[value];
    setState(data);
  });
}
