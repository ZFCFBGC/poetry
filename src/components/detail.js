import React, { Component } from "react";
import { NavBar, Icon } from "antd-mobile";
import http from "../server";
export default class Autor extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      abstract: [],
      array: []
    };
  }
  componentWillMount() {
    let content = this.props.location.search;
    let title = content.split("&")[0].slice(7);
    let author = content.split("&")[1].slice(7);
    author = decodeURI(author, "utf-8");
    // console.log(title,author)
    http.get("searchPoetry?name=" + title).then(res => {
      let poetry = res.data.result;
      console.log("结果", res.data.result);
      for (let i = 0; i < poetry.length; i++) {
        if (poetry[i].authors == author) {
          this.setState({
            data: poetry[i]
          });
          let arr = this.state.data.content.split("|");
          this.setState({
            array: arr
          });
          break;
        }
      }
    });
    http.get("searchAuthors?name=" + author).then(res => {
      this.setState({
        abstract: res.data.result
      });
    });
  }
  goSearch() {
    console.log(123);
    let { history } = this.props;
    history.push({ pathname: "/search" });
  }
  goLeft() {
    let { history } = this.props;
    history.push({ pathname: "/poetry/tang" });
  }
  render() {
    console.log("123", this.state);
    return (
      <div className="detail">
        <NavBar
          mode="light"
          rightContent={[
            <Icon
              key="1"
              type="search"
              style={{ marginRight: "16px" }}
              onClick={this.goSearch.bind(this)}
            />,
            <Icon key="2" type="ellipsis" style={{ marginRight: "16px" }} />
          ]}
          leftContent={[
            <Icon
              key="0"
              type="left"
              style={{ marginRight: "16px" }}
              onClick={this.goLeft.bind(this)}
            />
          ]}
        />
        <div className="content">
          <div className="title">{this.state.data.title}</div>
          <div className="author">{this.state.data.authors}</div>
          <div className="main">
            {this.state.array.map((item, idx) => {
              return <span key={idx}>{item}</span>;
            })}
          </div>
        </div>
        <h2>作者简介:</h2>

        {console.log(this.state.abstract)}
        {/* <h3>{this.state.abstract[0].name}</h3> */}
        {/* <p>{this.state.abstract[0].desc}</p> */}
        {this.state.abstract.length > 0 ? (
          <div className="abstract">
            <h3>姓名：{this.state.abstract[0].name}</h3>
            <p>{this.state.abstract[0].desc}</p>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
