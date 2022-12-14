import React from "react";
import "./Kontaktai.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";

function StyleActionsExample() {
  return (
    <div className="contbox ">
      <div className="contcont row ">
      <div className="head"><h2>Susisiekite su mumis</h2></div>
        <div className="hi row-6 col-lg-7 ">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>e. pašto adresas</Form.Label>
              <Form.Control type="email" placeholder="@" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>tekstas</Form.Label>
              <Form.Control as="textarea" rows={10} />
            </Form.Group>
            <Button>siųsti</Button>
          </Form>
        </div>
        <div className="ha row-4 col-lg-5 ">
         
          <a href="https://goo.gl/maps/ZydNFY15MUj4A7Zh6">
          <Image
          
            src="/images/map1.jpg"
            rounded
            fluid
          /></a>
        </div>

        <div
          className=" contactico row-4 col-lg-4 
        "
        >
          <a href="tel://+37061114526">
            <h3>&#9742;&#65039;</h3>
            <p>+37061114526</p>
          </a>
        </div>
        <div
          className=" contactico row-4 col-lg-4 
        "
        >
          <a href="https://goo.gl/maps/ZydNFY15MUj4A7Zh6">
            <h3>&#128205;</h3>
            <p>Gėlių g. 21, Lentvaris, LT-25114, Trakų r. sav.</p>
          </a>
        </div>
        <div
          className=" contactico row-4 col-lg-4 
        "
        >
          <a  href = "mailto:virgilijusbernatonis@gmail.com">
            <h3>&#9993;</h3>
            <p>virgis@optimumlignum.lt</p>
          </a>
        </div>

     

    
      </div>
    </div>
  );
}

export default StyleActionsExample;
