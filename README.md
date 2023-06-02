Saving notes here for future design.

FRONT-END NOTES
need to create what will start as maybe a 5x5 grid. Ideally I'll be able to change the size of the grid like in gridlocke, and will just save the array as a bigger array. Could have the array size get checked when the component is loaded so the size of the grid will be appropriate based on whether it's a 5x5/10x10/etc.
side section needs to have options for either... different images/patterns, colors... not sure what else at this time.
need a way to implement CRUD functionality with designs for the user.


BACK-END NOTES
need to make a back-end server for users to log in and save their "designs."
designs should essentially be an array of objects, the object will contain either an image to start or a pattern that can be changed by having a color filter go over it. Each object will also contain an orientation so that when a user rotates the image it'll save whatever orientation that image has.
a design will have many tiles, and the tile will be the object containing the details