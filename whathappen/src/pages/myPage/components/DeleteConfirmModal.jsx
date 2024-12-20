import styled from "styled-components";
import Button from "../../../components/Button";
import PropTypes from "prop-types";
import { media } from "../../../styles/MideaQuery";
import potato from "../../../assets/error_sad_potato.png";
import useDeleteUser from "../../../hooks/useDeleteUser";

export default function DeleteConfirmModal({ onClose }) {
  const { handleDelete } = useDeleteUser();

  return (
    <>
      <ModalBox>
        <SadPotato></SadPotato>
        <Text>정말로 회원을 탈퇴하시겠습니까?</Text>
        <ButtonWrap>
          <Button
            onClick={handleDelete}
            smallStyles={{
              width: "5rem",
              fontSize: "1.4rem",
            }}
          >
            예
          </Button>
          <Button
            backgroundColor="red"
            onClick={onClose}
            smallStyles={{
              width: "10rem",
              fontSize: "1.4rem",
            }}
          >
            아니오
          </Button>
        </ButtonWrap>
      </ModalBox>
      <Overlay onClick={onClose} />
    </>
  );
}

DeleteConfirmModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
const SadPotato = styled.div`
  background-image: url(${potato});
  width: 10rem;
  height: 10rem;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  align-self: center;

  ${media.small`
    width: 8rem;
    height: 8rem;
  `}

  ${media.xsmall`
    width: 6rem;
    height: 6rem;
  `}
`;
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

  ${media.small`
    padding: 2rem;
    border-radius: 1.5rem;
  `}

  ${media.xsmall`
    padding: 1.5rem;
    border-radius: 1rem;
  `}
`;

const Text = styled.p`
  font-size: 2rem;
  text-align: center;

  ${media.small`
    font-size: 1.8rem;
  `}

  ${media.xsmall`
    font-size: 1.6rem;
  `}
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
