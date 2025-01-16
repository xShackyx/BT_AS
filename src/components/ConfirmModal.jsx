import BigButton from "./BigButton";

function ConfirmModal({
  isModalOpen,
  setIsModalOpen,
  confirmedModal,
  element,
}) {
  function handleConfirmedModal(item) {
    confirmedModal(item);
    setIsModalOpen(false);
  }

  return (
    <dialog
      open={isModalOpen}
      className="h-16 w-44 z-10 border border-black rounded bg-gray-300"
    >
      <p className="text-center uppercase font-semibold">Confirm deletion?</p>
      <BigButton
        color="bg-red-500"
        xAxys="left-8"
        yAxys="bottom-1"
        onClick={() => setIsModalOpen(false)}
      >
        ✖
      </BigButton>
      <BigButton
        color="bg-green-500"
        xAxys="right-8"
        yAxys="bottom-1"
        onClick={() => handleConfirmedModal(element)}
      >
        ✔
      </BigButton>
    </dialog>
  );
}

export default ConfirmModal;
