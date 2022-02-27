# p5-cube-vertex

Creating a cube with vertices. When only using vertex and following each plane in a cube always ends up with a 'strange' triangle shape. I guess this has something to do with 3D being ultimately drawn with triangles. 

I've solved this by drawing 3 planes from one single anchor point, and another opposite from that point. So a front + left + bottom first, and then a back + right + top. It also works with different textures.

https://vincentsijben.github.io/p5-cube-vertex/

<img width="877" alt="image" src="https://user-images.githubusercontent.com/36117924/155864675-86a7f13f-09a9-469a-b4d1-f903e561223d.png">


<img width="670" alt="image" src="https://user-images.githubusercontent.com/36117924/155864574-b6a31c29-0de2-499f-83b9-af2f5d450302.png">
