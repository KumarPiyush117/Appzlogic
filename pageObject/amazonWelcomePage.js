class Amazon{
    constructor(page){
        this.page =page
        this.amazonSearch = page.getByRole('button', { name: 'Go', exact: true })
        //this.searchbox= page.locator('')
        

    }
}

module.exports = {Amazon}