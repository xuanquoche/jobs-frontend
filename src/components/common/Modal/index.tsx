import ButtonIcon from "../ButtonIcon";
import ClearIcon from "@mui/icons-material/Clear";
import { ModalContent, ModalCustom, ModalOverlay } from "./style";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  return (
    <ModalCustom open={isOpen} onClose={onClose}>
      <div className="contentWraprer">
        <ModalOverlay className="overlay" onClick={onClose} />
        <ModalContent className="contentModal">
          <div
            className="btnClose flex justify-end"
            style={{ margin: "20px auto" }}
          >
            <ButtonIcon onClick={onClose} className="">
              <ClearIcon />
            </ButtonIcon>
          </div>
          {children}
        </ModalContent>
      </div>
    </ModalCustom>
  );
};
