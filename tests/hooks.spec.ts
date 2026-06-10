import test from "@playwright/test";

test.beforeAll(async()=>{
console.log('This is before all');
});

test.beforeEach(async()=>{
    console.log('This will run before each test');
});
test('hooks test 1', async ({})=>{
console.log('This is test 1')
});

test('hooks test 2', async ({})=>{
console.log('This is test 2')
});

test.afterAll(async()=>{
    console.log('This is after all');
});

test.afterEach(async ()=>{
    console.log('This is after each');
})

//npx playwright test tests/hooks.spec.ts --workers=1