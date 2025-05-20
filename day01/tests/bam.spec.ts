import { test, expect } from '@playwright/test';

test('ผู้ประเมินราคาอิสระประเมินราคาทรัพย์สิน สำเร็จ', async ({ page }) => {
 // ผู้ประเมินราคาเข้าสู่ระบบ
  await page.goto('https://website-dev-bam.harmonyx.works/login?callbackUrl=/assessment');

  await page.getByTestId('input-email').click();
  await page.getByTestId('input-email').fill('supakee11');
  await page.getByTestId('input-password').click();
  await page.getByTestId('input-password').fill('1111');
  await page.getByTestId('login-btn').click();

   // ผู้ประเมินราคาค้นหาใบประเมิณราคา
  await page.getByTestId('input-เลขที่ใบ AR').click();
  await page.getByTestId('input-เลขที่ใบ AR').fill('AR6710-225-0063');
  await page.getByTestId('btn-search-filter').click();
  await page.getByRole('cell', { name: 'AR6710-225-' }).click();
  await page.getByText('เลขที่ใบ AR : AR6710-225-').click();
   // ผู้ประเมินราคาทำการประเมิณราคาสินทรัพย์
  await page.getByTestId('btn-table-row0').getByText('ประเมินราคา').click();
  await page.getByTestId('btn-link-0').click();
  await page.getByTestId('btn-link-0').click();
  await page.getByRole('tab', { name: 'รูปภาพทรัพย์' }).click();
  await page.getByTestId('btn-add-image-property_location-1').click();
  await page.getByTestId('btn-add-image').click();
  await page.getByLabel('1').setInputFiles('/practise-playwright101/day01/image/image.png');
});