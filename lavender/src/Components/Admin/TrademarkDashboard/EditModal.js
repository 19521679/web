import React, { useState } from "react";
import "reactjs-popup/dist/index.css";
import Modal from "react-modal";
import * as trademarkApi from "../../apis/trademark";
import * as myToast from "../../../Common/helper/toastHelper";
import * as imageApi from "../../apis/image";

const customStyles = {
  content: {
    top: "40%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function EditModal(props) {
  const [mathuonghieu, setMathuonghieu] = useState(props.trademark.mathuonghieu);
  const [tenthuonghieu, setTenthuonghieu] = useState(props.trademark.tenthuonghieu);
  const [xuatxu, setXuatxu] = useState(props.trademark.xuatxu);
  const [image, setImage] = useState(undefined);
  const [progress, setProgress] = useState(0);

  function submitHandler() {
    const fd = new FormData();
    fd.append("mathuonghieu", mathuonghieu);
    fd.append("tenthuonghieu", tenthuonghieu);
    fd.append("xuatxu", xuatxu);
    fd.append("image", image);

    trademarkApi
      .editTrademark(fd, runProgress)
      .then((success) => {
        props.editFunction(success.data.value);
        props.closeModal();
      })
      .catch((error) => {
        myToast.toastError("Thêm mới thất bại");
        console.error(error);
      });
  }

  const runProgress = (percent) => {
    if (percent === 100) {
      myToast.toastSucces("Sửa thành công");
      props.closeModal();
    }
    setProgress(percent);
  };

  return (
    <Modal
      isOpen={props.showModal}
      onRequestClose={props.closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div class="add-item-modal khachhangmodal" role="document">
        <div class="">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">
              Thêm mới thương hiệu
            </h5>
          </div>

          <div className="form-main-add-edit">
            <div className="row mb-3">
              <span className="text-secondary text-xs font-weight-bold">
                <img
                  alt=""
                  style={{ width: "80px", height: "80px" }}
                  src={
                    image === undefined
                      ? imageApi.image(
                          props.trademark.image,
                          props.trademark.mathuonghieu
                        )
                      : URL.createObjectURL(image)
                  }
                ></img>
              </span>
            </div>
            <div className="row mb-1">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">Image</div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                <input
                  className="form-control border"
                  id="image"
                  type="file"
                  placeholder=""
                  onChange={(e) => setImage(e.target.files[0])}
                ></input>
              </div>
            </div>

            <div className="row mb-1">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                Mã thương hiệu
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                <input
                  className="form-control border "
                  id="tenkhachhang"
                  placeholder=""
                  onChange={(e) => setMathuonghieu(e.target.value)}
                  value={mathuonghieu}
                  disabled
                ></input>
              </div>
            </div>

            <div className="row mb-1">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                Tên thương hiệu
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                <input
                  className="form-control border "
                  id="tenthuonghieu"
                  placeholder=""
                  onChange={(e) => setTenthuonghieu(e.target.value)}
                  value={tenthuonghieu}
                  
                ></input>
              </div>
            </div>

            <div className="row mb-1">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">Địa chỉ</div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                <input
                  className="form-control border"
                  id="xuatxu"
                  placeholder=""
                  onChange={(e) => setXuatxu(e.target.value)}
                  value={xuatxu}
                ></input>
              </div>
            </div>
          </div>

          <hr></hr>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: progress + "%" }}
            ></div>
          </div>

          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              onClick={props.closeModal}
            >
              Đóng
            </button>
            <button
              type="button"
              class="btn btn-primary"
              onClick={submitHandler}
            >
              Sửa
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
