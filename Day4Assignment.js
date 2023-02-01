const fs = require("fs");
const path = require("path");

fs.copyFile("original.txt", "copy.txt", (err) => {
    if (err)
        console.log("Error while copying the original file: \n", err);
    else
        console.log("Successfully copied the original file: \n");
})

function copyDirectory(src) {
    var dest = "./Clone";
    fs.mkdir(dest, (err) => {
        if (err) {
            console.log("Error while creating the Clone folder: \n", err);
            return err;
        }
        else {
            console.log('Clone folder created successfully!');
            fs.cp(src, dest, { recursive: true }, (err) => {
                if (err) {
                    console.log("Error while copying the original folder: \n", err);
                    return err;
                }
                else {
                    console.log("Successfully copied the original folder to clone folder: \n");
                    return dest;
                }
            })

        }
    });
}

var src = "./Original";
var destinationDirectory = copyDirectory(src);
console.log(destinationDirectory);