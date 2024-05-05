import { FirebaseApp } from "@/config/firebase";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

export const UploadImageToFirebaseAndReturnUrls = async (files: File[]) => {
  try {
    //  upload image to firebase
    const storage = getStorage(FirebaseApp);

    const uploadedImagesRefs = await Promise.all(
      files.map(async file => {
        const storageRef = ref(storage, `images/${file.name}`);
        await uploadBytes(storageRef, file);
        return storageRef;
      })
    );

    // get the URLS of the images uploaded

    const urls = await Promise.all(
      uploadedImagesRefs.map(async ref => {
        const url = await getDownloadURL(ref);
        return url;
      })
    );

    return urls;
    
  } catch (error: any) {
    throw new Error(error);
  }
};
