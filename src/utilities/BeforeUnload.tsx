import { useEffect } from "react";

const useWarnIfUnsavedChanges = (unsavedChanges: boolean) => {
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (unsavedChanges) {
        const message =
          "You have products in your cart. Cart items will be lost if you reload!!";
        event.preventDefault();
        event.returnValue = message;
        return message;
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [unsavedChanges]);
};

export default useWarnIfUnsavedChanges;
