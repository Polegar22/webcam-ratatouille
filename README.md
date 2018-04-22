Incompatible Genres ? Hmmm is a rat in a kitchen compatible ?

For each ludum dare in which I participate, I try to learn something new. This time it's https://js.tensorflow.org. Because it's incredible to be able to do deep neural network programming in JS !

I've used this tutorial as a starting point : https://js.tensorflow.org/tutorials/webcam-transfer-learning.html.

Surprinsingly, I've had more trouble with my rusty JS than with tensorflow ...

HERE'S HOW YOU PLAY THE GAME : 

1- For each control you need to provide some pictures of you holding an object(a fruit or a vegetable for example :)) in a specific direction. For IDLE I suggest you to hide the object your holding.

2- Then you have to clic on "Train ratatouille" and wait a little for the number to go down. 

3- After that clic on "Let's cook" and be ready to play !

4- Show the object on the direction you want to move the character. You need to catch the cheese and avoid the mouse trap !

In this example, we'll use a pretrained [MobileNet](https://github.com/tensorflow/tfjs-examples/tree/master/mobilenet) model and train another model
using an internal mobilenet activation to predict 4 different classes from the
webcam defined by the user.

[See this example live!](webcam-ratatouille)
