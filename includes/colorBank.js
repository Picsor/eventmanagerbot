module.exports = class cColorBank {
    constructor() {
        this.m_Bank = {};
        this.init();
    }

    init()
    {
        this.Add("red", "#ff5757")
        this.Add("danger", "#ff5757")
        this.Add("light-green", "#14de51")
        this.Add("success", "#14de51")
        this.Add("yellow", "#ffd000")
        this.Add("orange", "#ffa200")
        this.Add("purple", "#6018f0")
        this.Add("flash-red", "#fc0303")
        this.Add("blurple", "#454FBF")

        this.Add("StaffRequest", "#fc0303") //Flash_Red
        this.Add("Event", "#fc0303") //Flash_Red
    }

    Add(color_id, color)
    {
        this.m_Bank[color_id.toLowerCase()] = color;
    }

    GetColor(color_id)
	{
        let id = color_id.toLowerCase();
        if (id in this.m_Bank)
            return this.m_Bank[id];
		
        return `Color ID "${color_id}" is missing`;
    }

}
