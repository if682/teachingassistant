import { useEffect, useState } from "react";
import axiosInstance from "../common/server";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CreatePlaylist.css";
import { s3 } from "../../config/aws";
import { useNavigate } from "react-router";
import closeX from "./assets/closeX.svg";

function CreatePlaylist(props) {
  const { categories, modalRef, openModal, modalController, accountID } = props;

  const [playlistName, setPlaylistName] = useState("");

  const [playlistCategory, setPlaylistCategory] = useState(
    categories.length > 0 ? categories[0] : undefined
  );

  const [playlistImage, setPlaylistImage] = useState("");
  const [preview, setPreview] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  console.log(localStorage.getItem("accountID"));

  const navigate = useNavigate();

  const closeModal = () => {
    openModal();
    setPlaylistImage(undefined);
    setErrorMessage(undefined);
    setPlaylistName("");
    setPlaylistCategory(undefined);
    document.querySelector(".createPlaylistModalDiv").style.display = "none";
  };

  const handlePlaylistImage = async function (event) {
    event.stopPropagation();
    try {
      const converted = new File(
        [event.target.files[0]],
        event.target.files[0].name
      );

      const params = {
        Bucket: "projeto-ess-sharkmusic-bucket",
        Key: event.target.files[0].name,
        Body: converted,
      };

      const response = await s3.upload(params).promise();

      console.log(response.Location);
      setPlaylistImage(response.Location);

      setPreview(
        <div
          className="form-group"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            id="playlist-image-preview"
            style={{ padding: "5px", width: "100%", maxHeight: "343px" }}
            src={response.Location}
            alt=""
          />
        </div>
      );
    } catch (err) {
      console.log("erro no upload de imagem", err);
    }
  };

  async function createPlaylist() {
    try {
      const response = await axiosInstance({
        method: "post",
        url: "/createPlaylist",
        headers: {},
        data: {
          name: playlistName,
          category: playlistCategory,
          image: playlistImage,
          accountID: parseInt(localStorage.getItem("accountID"), 10),
        },
      });

      setPlaylistName("");
      setPlaylistCategory(undefined);
      setPlaylistImage(undefined);

      console.log(response.data);
      navigate("/PlaylistPage", { state: { ID: response.data.id } });
      closeModal();
      return;
    } catch (error) {
      console.log("erro na criação de playlist!");
      setErrorMessage(
        <div class="alert-create-playlist">
          <span class="closebtn-create-playlist" onClick={closeModal}>
            &times;
          </span>
          Erro na criação da playlist!
        </div>
      );
      setTimeout(closeModal, 2000);
      return;
    }
  }

  return (
    <div className={`modal ${modalController} `} tabIndex="-1" role="dialog">
      <div className="addPlaylistModal-main" role="document" ref={modalRef}>
        <img
          onClick={closeModal}
          className="closeButtonModal"
          src={closeX}
          alt="Close Button"
        />
        <div className="addPlaylistModal-modal">
          <div className="auxDiv-preview">
            <div>
              <p className="addPlaylistModal-text">Nome da Playlist</p>
              <input
                className="addPlaylistModal-inputName"
                type="text"
                id="playlist-name"
                name="playlistName"
                value={playlistName}
                onChange={(event) => setPlaylistName(event.target.value)}
              />
              <p className="addPlaylistModal-text">Imagem de Capa</p>
              <div className="addPlaylistModal-inputImage">
                <label for="playlistImage">Enviar imagem</label>
                <input
                  className="addPlaylistModal-inputImage"
                  type="file"
                  id="playlistImage"
                  name="playlistImage"
                  accept="image/png, image/jpeg"
                  onChange={handlePlaylistImage}
                />
              </div>
              <p className="addPlaylistModal-text">Selecione uma categoria</p>
              <select
                id="playlist-category"
                className="addPlaylistModal-inputCategory"
                value={playlistCategory}
                onChange={(event) => setPlaylistCategory(event.target.value)}
              >
                {categories.map((el, index) => (
                  <option value={el} key={index}>
                    {el ? el : "Selecione"}
                  </option>
                ))}
              </select>
            </div>
            {preview}
          </div>
          {errorMessage}
          <div className="addPlaylistModal-button" onClick={createPlaylist}>
            <p>Confirmar</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePlaylist;
