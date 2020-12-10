import React from 'react';
import data from './final_invoice.json';
import style from './pdf.css';
import styleboost from './bootstrap.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Preview, print } from 'react-html2pdf';
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';


export default class pdfGenerator extends React.Component {

  componentDidMount () {

    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      //console.log(res);
      //console.log(data.body["id"]);

      for (var key in data.body) {
        if (data.body.hasOwnProperty(key)) {
            //console.log(key + " -> " + data.body[key]);
            document.getElementById(key).innerHTML = data.body[key];
        }
      }
    });
  }

  downloadButton () {
    const input = document.getElementById("invoice");
    console.log(input)
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        // pdf.output('dataurlnewwindow');
        pdf.save("download.pdf");
      })
    ;
  }

  render() {
		return (
      <div class="container d-flex justify-content-center mt-50 mb-50">
        <div class="row">
          <div class="col-md-12 text-right mb-3">
                <button class="btn btn-primary" id="download" onClick={this.downloadButton}> Download pdf</button>
          </div>
          <div class="col-md-12">
            <div class="card" id="invoice">
            <div class="card-header bg-transparent header-elements-inline">
                <h6 class="card-title text-primary">Sale invoice</h6>
            </div>
            <div class="card-body">
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="mb-4 pull-left">

                                    <ul class="list list-unstyled mb-0 text-left">
                                        <li id="comp_name"></li>
                                        <li id="comp_add"></li>
                                        <li id="comp_state"></li>
                                        <li id="comp_num"></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="mb-4 ">
                                    <div class="text-sm-right">
                                        <h4 class="invoice-color mb-2 mt-md-2" id = "id"></h4>
                                        <ul class="list list-unstyled mb-0">
                                            <li id = "supply_data"> <span class="font-weight-semibold"></span></li>
                                            <li id = "invoice_date"> <span class="font-weight-semibold"></span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-md-flex flex-md-wrap">
                            <div class="mb-4 mb-md-2 text-left"> <span class="text-muted">Invoice To:</span>
                                <ul class="list list-unstyled mb-0">
                                    <li>
                                        <h5 class="my-2" id = "billing_name"></h5>
                                    </li>
                                    <li id = "billing_company"><span class="font-weight-semibold"></span></li>
                                    <li id = "billing_addr"></li>
                                    <li id = "billing_city"></li>
                                    <li id = "billing_country"></li>
                                    <li id = "billing_phone"></li>
                                    <li><a href="#" data-abc="true" id = "billing_email"></a></li>
                                </ul>
                            </div>
                            <div class="mb-2 ml-auto"> <span class="text-muted">Payment Details:</span>
                                <div class="d-flex flex-wrap wmin-md-400">
                                    <ul class="list list-unstyled mb-0 text-left">
                                        <li>
                                            <h5 class="my-2">Total Due:</h5>
                                        </li>
                                        <li>Name:</li>
                                        <li>Address:</li>
                                        <li>City:</li>
                                        <li>Country:</li>
                                        <li>Phone:</li>
                                        <li>Email:</li>
                                    </ul>
                                    <ul class="list list-unstyled text-right mb-0 ml-auto">
                                        <li>
                                            <h5 class="font-weight-semibold my-2" id = "total_due"></h5>
                                        </li>
                                        <li id = "invoiceto_name"><span class="font-weight-semibold"></span></li>
                                        <li id = "invoiceto_addr"></li>
                                        <li id = "invoiceto_city"></li>
                                        <li id = "invoiceto_contry"></li>
                                        <li id = "invoiceto_phone"><span class="font-weight-semibold"></span></li>
                                        <li id = "invoiceto_email"><span class="font-weight-semibold"></span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-lg">
                            <thead>
                                <tr>
                                    <th>Description</th>
                                    <th>Price</th>
                                    <th>Discount</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <h6 class="mb-0" id = "item1_name"></h6> <span class="text-muted" id = "item1_sku"></span>
                                    </td>
                                    <td id = "item1_price"></td>
                                    <td id = "item1_discount"></td>
                                    <td><span class="font-weight-semibold" id = "item1_total"></span></td>
                                </tr>
                                <tr>
                                    <td>
                                        <h6 class="mb-0" id = "item2_name"></h6> <span class="text-muted" id = "item2_sku"></span>
                                    </td>
                                    <td id = "item2_price"></td>
                                    <td id = "item2_discount"></td>
                                    <td><span class="font-weight-semibold" id = "item2_total"></span></td>
                                </tr>
                                <tr>
                                    <td>
                                        <h6 class="mb-0" id = "item3_name"></h6> <span class="text-muted" id = "item3_sku"></span>
                                    </td>
                                    <td id = "item3_price"></td>
                                    <td id = "item3_discount"></td>
                                    <td><span class="font-weight-semibold" id = "item3_total"></span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="card-body">
                      <div class="d-md-flex flex-md-wrap">
                        <div class="pt-2 mb-3 wmin-md-400 ml-auto">
                          <h6 class="mb-3 text-left">Total due</h6>
                          <div class="table-responsive">
                          <table class="table">
                          <tbody>
                            <tr>
                                <th class="text-left">Subtotal:</th>
                                <td class="text-right" id = "subtotal"></td>
                            </tr>
                            <tr>
                              <th class="text-left">Tax: <span class="font-weight-normal">(6%)</span></th>
                              <td class="text-right" id = "tax"></td>
                            </tr>
                            <tr>
                                <th class="text-left">Total:</th>
                              <td class="text-right text-primary">
                                <h5 class="font-weight-semibold" id = "grand_total"></h5>
                              </td>
                            </tr>
                          </tbody>                            
                          </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-footer"> <span class="text-muted">Invoice made by Imprint Genius</span> </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  

  
}
