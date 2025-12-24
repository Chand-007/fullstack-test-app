import "./MailModal.css";

export default function MailModal({
  name,
  email,
  body,
  setModal,
  handleCopyClipBoard,
}) {
  return (
    <div className="modal-container">
      <div className="mail-heading">
        <h3>{name}</h3>
        <button onClick={handleCopyClipBoard}>copy mail body</button>
        <button onClick={() => setModal(false)}>close</button>
      </div>
      <h4>TO: {email}</h4>
      <h6>{body}</h6>
    </div>
  );
}
