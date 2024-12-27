import { useState, useContext, useEffect } from "react";
// import { db } from "../lib/firebase.prod";
import { FirebaseContext } from "../context/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function useContent(target) {
  // Having the states
  const [content, setContent] = useState([]);
  const { db } = useContext(FirebaseContext);

  // Useeffect to fetch all the contents from the firebase
  useEffect(() => {
    async function fetchContent() {
      try {
        const targetCollection = collection(db, target); // Reference to Firestore collection
        const snapShot = await getDocs(targetCollection); // Fetch all documents
        // Putting docId in the datas
        const allContents = snapShot.docs.map((doc) => ({
          ...doc.data(),
          docId: doc.id,
        })); // Map through documents to extract data
        setContent(allContents); // Update state with fetched content
      } catch (error) {
        console.error("Error fetching Firestore data:", error.message);
      }
    }

    fetchContent(); // Call the async function
  }, [db, target]); // Re-run effect when `db` or `target` changes

  return { [target]: content };
}
