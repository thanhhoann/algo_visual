import React from "react";
import Sketch from "react-p5";
import useWindowDimensions from "../hooks/getWindowDimensions";
import { CANVAS_EXTRA_WIDTH, CANVAS_EXTRA_HEIGHT } from "../terms";

let arr = [];

export default function QuickSort() {
  const { height, width } = useWindowDimensions();

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(
      width - CANVAS_EXTRA_WIDTH,
      height - CANVAS_EXTRA_HEIGHT
    ).parent(canvasParentRef);
    arr = new Array(p5.width);

    for (let i = 0; i < arr.length; i++) {
      arr[i] = p5.random((p5.height * 8) / 9);
    }
  };

  const draw = (p5) => {
    p5.background(0);

    let i = 0;
    if (i < arr.length) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i + 1]) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        }
      }
    } else {
      p5.noLoop();
    }
    i++;

    for (let i = 0; i < arr.length; i++) {
      p5.stroke(255);
      p5.line(i, p5.height, i, p5.height - arr[i]);
    }
  };

  return <Sketch setup={setup} draw={draw} />;
}
