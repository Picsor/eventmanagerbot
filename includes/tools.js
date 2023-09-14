var fs = require('fs');

module.exports = class cTools {
    constructor(client) {
        this.m_client = client;
    }
    
	Replace(word, liste, char) {
		let result = "";
		for (let i = 0; i < word.length; i++) //1
		{
			if(liste.includes(word[i]))
				result+=char;
			else
				result += word[i];
		}
		return result;
	}

    GetDateFormat() {
        let date_format = "";
        switch(this.m_client.m_Settings.m_Language)
        {
            case "Spanish":
            case "French": date_format = "DD/MM HHhmmm";
                break;

            case "English": date_format = "MM/DD HHhmmm";
                break;
        }
        return date_format;
    }

    getAverage(array)
    {
        let total = 0;
        let result = 0;
        for(let i=0; i<array.length; i++)
            total += array[i]; 
        
        result = total/array.length;
        return result;
    }

    split(sentence, separator)
    {
        let arr = [];
        let str = "";
        let modeSep = true;
        for (let i=0; i<sentence.length; i++)
        {
            let c = sentence[i];
            if (c=='"')
                modeSep = !modeSep;

            if (c == separator && modeSep==true)
            {
                arr.push(str);
                str = "";
            }
            else
                str+=c;
        }
        arr.push(str);
        return arr;
    }

    getDirs (rootDir, cb) { 
        fs.readdir(rootDir, function(err, files) { 
            var dirs = []; 
            for (var index = 0; index < files.length; ++index) { 
                var file = files[index]; 
                if (file[0] !== '.') { 
                    var filePath = rootDir + '/' + file; 
                    fs.stat(filePath, function(err, stat) {
                        if (stat.isDirectory()) { 
                            dirs.push(this.file); 
                        } 
                        if (files.length === (this.index + 1)) { 
                            return cb(dirs); 
                        } 
                    }.bind({index: index, file: file})); 
                }
            }
        });
    }

}
