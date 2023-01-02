import TestRenderer from 'react-test-renderer';
import { SignIn } from "./SignIn";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// console.log(testRenderer.toJSON())

// // 入力エリア
// const input = testRenderer.getInstance("input-email")

// // デフォルトは空であることを確認
// expect(input).toBe(null)

describe("<SignIn />", () => {
    it("スナップショットテスト", () => {
        const testRenderer = TestRenderer.create(<SignIn />);
        // console.log(testRenderer.toJSON())
        // console.log(testRenderer)
        // console.log(testRenderer.toTree())
        // console.log(testRenderer.root)
        // console.log(testRenderer.root.children)

        // .snapファイルの内容と実際の実装を比較する
        expect(testRenderer.toJSON()).toMatchSnapshot()
    })

    it("テキストボックス入力テスト", () => {
        render(<SignIn />);
        const inputValue = screen.getByRole("textbox");
        console.log(screen)
        userEvent.type(inputValue, "test");
        expect(inputValue.value).toBe("test");
    });


})
