import React, { Component } from 'react'

export default class ImportItem extends Component {
    componentDidMount(){
    }
    render() {
        return (
            <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
            <div className="d-flex align-items-center">
              <button className="btn btn-icon-only btn-outline-success mb-0 me-3 p-3 btn-sm d-flex align-items-center justify-content-center">
              <i class="bi bi-receipt"></i>
              </button>
              <div className="d-flex flex-column">
                <h6 className="mb-1 text-dark text-sm">{this.props.bill.masanphamNavigation.tensanpham}</h6>
                <span className="text-xs">
                  Mã phiếu nhập: {this.props.bill.maphieunhap}
                </span>
                <span className="text-xs">
                  Số lượng: {this.props.bill.soluongnhap}
                </span>
               
                <span className="text-xs">
                  Nhà cung cấp: {this.props.bill.manhacungcapNavigation.tennhacungcap}
                </span>
                <span className="text-xs">
                  Ngày nhập: {this.props.bill.ngaynhap}
                </span>
                <span className="text-xs">
                  Ghi chú: {this.props.bill.ghichu!==undefined&&this.props.bill.ghichu}
                </span>
              </div>
            </div>
            <div className="d-flex align-items-center text-success text-gradient text-sm font-weight-bold">
            Tổng tiền: {this.props.bill.tiennhap}
            </div>
          </li>
        )
    }
}
