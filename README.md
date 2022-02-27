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

<img width="227" alt="image" src="https://user-images.githubusercontent.com/36117924/155884268-96578eb9-670f-45af-b507-5aa488f4398e.png">


I've solved this by drawing 3 planes from one single anchor point, and another opposite from that point. So a front + left + bottom first, and then a back + right + top. It also works with different textures.

https://vincentsijben.github.io/p5-cube-vertex/

<img width="877" alt="image" src="https://user-images.githubusercontent.com/36117924/155864675-86a7f13f-09a9-469a-b4d1-f903e561223d.png">


<img width="670" alt="image" src="https://user-images.githubusercontent.com/36117924/155864574-b6a31c29-0de2-499f-83b9-af2f5d450302.png">
