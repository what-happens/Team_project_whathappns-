import styled from "styled-components";
import Button from "../../../components/Button";
import PropTypes from "prop-types";

export default function DeleteBookmarkModal({ onClose, onDelete }) {
  return (
    <>
      <ModalBox>
        <Text>북마크를 삭제하시겠습니까?</Text>
        <ButtonWrap>
          <Button onClick={onDelete}>예</Button>
          <Button onClick={onClose} backgroundColor="red">
            아니오
          </Button>
        </ButtonWrap>
      </ModalBox>
      <Overlay onClick={onClose} />
    </>
  );
}

DeleteBookmarkModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const ModalBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 3rem;
  border-radius: 2rem;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Text = styled.p`
  font-size: 2rem;
  text-align: center;
`;

const ButtonWrap = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;
