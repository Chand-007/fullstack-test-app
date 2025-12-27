import { useState, useEffect } from "react";
import MarkReaderContainer from "./MarkReaderContainer";
import MessageContainer from "./MessageContainer";
import MailModal from "./MailModal";
import "./styles.css";

export default function App() {
  const [comments, setComments] = useState([]);
  const [check, setCheck] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [allCheck, setAllCheck] = useState(false);
  const [allFavorite, setAllFavorite] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState();
  const [pagination, setPagination] = useState(0);

  console.log("Comments length:", comments.length, "pagination", pagination);

  useEffect(() => {
    async function getProducts() {

      try{
        const comments = await fetch("http://nginx:4000");
        const comments_promise = await comments.json();
        setComments(comments_promise);
        console.log("comments_promise",comments_promise)
      }
      catch(error){
        console.log(error)
      }
      
      //const comments_promise = await comments.json();
      
      
    }
    getProducts();
  }, []);

  function handleCopyClipBoard() {
    const copyContent = modalContent.body;
    navigator.clipboard.writeText(copyContent);
  }

  function onChangeCheck(id) {
    const id_index = check.indexOf(id);
    if (id_index !== -1) {
      const newArray = [
        ...check.slice(0, id_index),
        ...check.slice(id_index + 1),
      ];
      setCheck(newArray);
    } else {
      setCheck([...check, id]);
    }
  }

  function changeFavorite(id) {
    if (favorite.includes(id)) {
      const newFavorite = favorite.filter((index) => index !== id);
      setFavorite(newFavorite);
    } else {
      setFavorite([...favorite, id]);
    }
  }

  function handleAllCheckbox() {
    if (allCheck) {
      setCheck([]);
    } else {
      setCheck(comments.map((comment) => comment.id));
    }
    setAllCheck((prev) => !prev);
  }

  function handleAllFavorite() {
    if (allFavorite) {
      setFavorite([]);
    } else {
      setFavorite(comments.map((comment) => comment.id));
    }
    setAllFavorite((prev) => !prev);
  }

  function handleModal(id) {
    setCheck([...check, id]);
    const modal_comment = comments.filter((comment) => comment.id === id);
    setModalContent(modal_comment[0]);
    setModal(true);
  }

  return (
    <div className="App">
      <MarkReaderContainer
        handleAllCheckbox={handleAllCheckbox}
        allCheck={allCheck}
        handleAllFavorite={handleAllFavorite}
        pagination={pagination}
        setPagination={setPagination}
      />
      <div className="total-message-container">
        {comments
          .slice(pagination * 20, pagination * 20 + 20)
          .map((comment) => (
            <MessageContainer
              key={comment.id}
              id={comment.id}
              name={comment.name}
              email={comment.email}
              body={comment.body}
              check={check}
              setCheck={setCheck}
              onChangeCheck={onChangeCheck}
              favorite={favorite}
              setFavorite={setFavorite}
              changeFavorite={changeFavorite}
              handleModal={handleModal}
            />
          ))}
      </div>
      {modal && (
        <div className="modal-mail-container">
          <MailModal
            handleCopyClipBoard={handleCopyClipBoard}
            name={modalContent.name}
            email={modalContent.email}
            body={modalContent.body}
            setModal={setModal}
          />
        </div>
      )}
    </div>
  );
}
