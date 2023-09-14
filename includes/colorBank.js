module.exports = class cColorBank {
    constructor() {
        this.m_Bank = {};
        this.init();
    }

    init()
    {
        this.Add("Red", "#ff5757")
        this.Add("Danger", "#ff5757")
        this.Add("Light_Green", "#14de51")
        this.Add("Success", "#14de51")
        this.Add("Yellow", "#ffd000")
        this.Add("Orange", "#ffa200")
        this.Add("purple", "#6018f0")
        this.Add("Flash_Red", "#fc0303")
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
