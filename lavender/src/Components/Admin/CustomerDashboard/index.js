import React, { Component } from "react";
import * as customerApi from "../../apis/customer";
import Item from "./Item";
import _ from "lodash";
import "./style.css";
import AddModal from "./AddModal";
export default class index extends Component {
  state = {
    showModal: false,
    listcustomer: [],
  };
  closeModal() {
    this.setState({ showModal: false });
  }
  openModal() {
    this.setState({ showModal: true });
  }

  async loadCustomer() {
    customerApi
      .allCustomer()
      .then((success) => {
        if (success.status === 200) {
          console.log(success.status)
          this.setState({ listcustomer: success.data.value.$values });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async componentDidMount() {
    this.loadCustomer();
  }

  async edit(customer) {
    var listtemp = this.state.listcustomer;
    _.remove(listtemp, (n) => {
      return n.makhachhang === customer.makhachhang;
    });

    listtemp.push(customer);

    await this.setState({ listcustomer: listtemp });
  }

  async add(customer) {
    var listtemp = this.state.listcustomer;

    listtemp.push(customer);

    await this.setState({ listcustomer: listtemp });
  }

  async delete(customer) {
    var listtemp = this.state.listcustomer;

    _.remove(listtemp, (n) => {
      return n.makhachhang === customer.makhachhang;
    });
    await this.setState({ listcustomer: listtemp });
  }
  render() {
    return (

      <main className="main-content position-relative border-radius-lg left-menu">
       <AddModal
          showModal={this.state.showModal}
          closeModal={this.closeModal.bind(this)}
          add={this.add.bind(this)}
        ></AddModal>
        {/* End Navbar */}
        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-12">
              <div className="card my-4">
                
                <div className="card-header p-0 position-relative mt-n4 mx-3">
                  <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                  <h6 className="text-white text-capitalize ps-3 danhsachsanpham-title">
                      Danh sách điện thoại
                    </h6>
                    <button
                      className="btn bg-gradient-dark mb-0 mt-4 add-khachhang-button"
                      onClick={this.openModal.bind(this)}
                    >
                      + Thêm khách hàng
                    </button>
                  </div>
                </div>
                <div className="card-body px-0 pb-2">
                  <div className="table-responsive p-0">
                    <table className="table align-items-center mb-0">
                      <thead>
                        <tr>
                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            <b>Ảnh</b>
                          </th>
                          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            <b>Tên khách hàng</b>
                          </th>
                          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            <b>Email</b>
                          </th>
                          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            <b>SĐT</b>
                          </th>
                          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            <b>Địa chỉ</b>
                          </th>
                          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            <b>Ngày sinh</b>
                          </th>
                          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            <b>Loại khách hàng</b>
                          </th>
                          <th className="text-secondary opacity-7" />
                        </tr>
                      </thead>
                      <tbody>
                        {function () {
                          var result = null;
                          result = this.state.listcustomer.map((value, key) => {
                            return (
                              <Item
                                customer={value}
                                key={key}
                                add={this.add.bind(this)}
                                delete={this.delete.bind(this)}
                                edit={this.edit.bind(this)}
                              ></Item>
                            );
                          });
                          return result;
                        }.bind(this)()}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    );
  }
}
