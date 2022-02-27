# p5-cube-vertex

Creating a cube with vertices. When only using vertex, drawing each plane in a cube always ends up with a 'strange' triangle shape. 

If the starting point for drawing the next plane or square isn't located at one of it's corners, you'll end up with the 'weird' diagonal fills, because p5 tries to connect the desired square to the begin point.
```
fill(255,0,255);
beginShape();
vertex(0,0,0);

vertex(100,0,0);
vertex(100,0,-100);
vertex(100,-100,-100);
vertex(100,-100,0);
vertex(100,0,0);
endShape();
```
<img width="292" alt="image" src="https://user-images.githubusercontent.com/36117924/155884431-e5c8dc33-aa49-4fdf-88fa-9d25d095b7a1.png">

You could draw 3 planes from the same starting anchor point, for example FRONT, RIGHT and TOP in this example:

<img width="215" alt="image" src="https://user-images.githubusercontent.com/36117924/155884672-df6e76ec-32fa-48cf-8470-d5cad8b53ebe.png">

The code inside `sketch.js` uses 2 shapes. Each shape draws 3 planes. In processing you could group shapes as I did in [this example](https://gist.github.com/vincentsijben/657bbc998cc373800b38a9ac8fe8a4b4).
It also works with different textures.

https://vincentsijben.github.io/p5-cube-vertex/

<img width="877" alt="image" src="https://user-images.githubusercontent.com/36117924/155864675-86a7f13f-09a9-469a-b4d1-f903e561223d.png">


<img width="670" alt="image" src="https://user-images.githubusercontent.com/36117924/155864574-b6a31c29-0de2-499f-83b9-af2f5d450302.png">
