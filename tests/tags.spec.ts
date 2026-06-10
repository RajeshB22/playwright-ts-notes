import test from "@playwright/test";

test('tag test @sanity', async ({  }) => {
    console.log('This is a sanity test');
});

test('tag test2 @regression', async ({  }) => {
    console.log('This is a regression test');
    });

//below is a newer way to do the tagging

test('tag test 3',{tag:'@smoke'},async({})=>{
    console.log('THis is a smoke test');
});

//to run either of the ways==> npx playwright test tests/tags.spec.ts --grep "@regression"