describe('Sample Test', () => {
    it('should pass', () => {
        expect(1 + 1).toBe(2);
    });
});

describe('JSDOM Test', () => {
    it('should render HTML correctly', () => {
        document.body.innerHTML = '<div id="root"></div>';
        const root = document.getElementById('root');
        expect(root).not.toBeNull();
    });
});


export { }