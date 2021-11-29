import React, { Component } from 'react'

import "./QuanLyDonHang.css";
export default class index extends Component {
    render() {
        return (
            <div className="Account__StyledAccountLayoutInner-sc-1d5h8iz-1 jXurFV">
        <div className="styles__StyledAccountListOrder-sc-6t66uv-0 iOhDoD">
          <div className="heading">Đơn hàng của tôi</div>
          <div className="inner">
            <table>
              <thead>
                <tr>
                  <th>Mã đơn hàng</th>
                  <th>Ngày mua</th>
                  <th>Sản phẩm</th>
                  <th>Tổng tiền</th>
                  <th>Trạng thái đơn hàng</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><a href="/sales/order/view/458675753">458675753</a></td>
                  <td>14/11/2021</td>
                  <td>[Giao Nhanh 2H] Trái Ôliu Xanh Hiệu Latino Bella 235G</td>
                  <td>217.000 ₫</td>
                  <td>Đã hủy</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        </div>
        )
    }
}
