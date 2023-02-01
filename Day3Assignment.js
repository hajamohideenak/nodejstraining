const fs = require("fs");

fs.readFile("file1.txt", function (err, file1Content){
    if (err)
        console.log("Error while reading the content from file1 : \n", err);
    else {
        fs.readFile("file2.txt", function (err, file2Content) {
            if (err)
                console.log("Error while reading the content from file2 : \n", err);
            else {
                fs.readFile("file3.txt", function (err, file3Content) {
                    if (err)
                        console.log("Error while reading the content from file2 : \n", err);
                    else {
                        var file4Content = file1Content.toString() + "\n\n" + file2Content.toString() + "\n\n" + file3Content.toString();

                        fs.writeFile("file4.txt", file4Content, (err) => {
                            if (err)
                                console.log("Error while writing the file2 content : \n", err);
                            else
                                console.log("Successfully written all the contents from file1, file2 and file3 into file4: \n", file4Content);
                        })
                    }
                })
            }
        })
    }    
})