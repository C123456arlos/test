describe('my react application', () => {
    it('it should look correct', () => {
        browser.url('/')
        browser.execute('/*@visual.init*/', 'my react app')
        browser.execute('/*@visual.snapshot*/', 'home page')
    })
})