import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";
import { useRef } from "react";
function Alert() {
  const { isOpen, type, message, onAlertClose } = useAlertContext();
  const cancelRef = useRef();
  const isSuccess = type.type === "success";

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onAlertClose}
      isCentered // Center the dialog content
      motionPreset="scale" // Apply scale animation when opening and closing
      size="sm" // Set the size of the dialog to small
    >
      <AlertDialogOverlay />

      <AlertDialogContent
        py={4}
        backgroundColor={isSuccess ? "#81C784" : "#FF8A65"}
        position="fixed" // Ensure the position is fixed
        bottom={4} // Adjust bottom value as needed
        left={null} // Adjust left value as needed
        right={8} // Ensure it's not constrained by the right side
      >
        <AlertDialogHeader fontSize="lg" fontWeight="bold">
          {isSuccess ? "All good!" : "Oops!"}
        </AlertDialogHeader>
        <AlertDialogBody>{type.message}</AlertDialogBody>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default Alert;
