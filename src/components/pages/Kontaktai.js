import React from "react";
import "./Kontaktai.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";

function StyleActionsExample() {
  return (
    <div className="contbox ">
      <div className="contcont row ">
        <div className="head">
          <h2>Susisiekite su mumis</h2>
          <h5>(Savaitgaliais nedirbame)</h5>
        </div>
        <div className="hi row-6 col-lg-7 ">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="email" placeholder="e. pašto adresas" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control placeholder="tekstas" as="textarea" rows={10} />
            </Form.Group>
            <Button>siųsti</Button>
          </Form>
        </div>
        <div className="ha row-4 col-lg-5 p-2 ">
          <a href="https://goo.gl/maps/ZydNFY15MUj4A7Zh6">
            <Image src="/images/map1.jpg" rounded fluid />
          </a>
        </div>
        <div class="div">
        <div class="line col-lg-12 mt-4">
        <div class="mb-4">
                <hr ></hr>
            </div>
        </div>
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
          <a href="mailto:virgilijusbernatonis@gmail.com">
            <h3>&#9993;</h3>
            <p>virgilijus@optimumlignum.lt</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default StyleActionsExample;
