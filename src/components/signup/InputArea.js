import { TextField } from "@material-ui/core";
import { CustomBtn } from '../common';
const InputArea = () => {
    return (
        <div className="InputArea">
            <table>
                <tr>
                    <th><TextField id="outlined-basic" label="아이디" variant="outlined" /></th>
                    <td><CustomBtn id="dupl-id-btn" title="중복 체크"/></td>
                </tr>
                <tr>
                    <th><TextField type="password" id="outlined-basic" label="비밀번호" variant="outlined" /></th>
                    <td></td>
                </tr>
                <tr>
                    <th><TextField type="password" id="outlined-basic" label="비밀번호 재입력" variant="outlined" /></th>
                    <td></td>
                </tr>
                <tr>
                    <th><TextField id="outlined-basic" label="이름" variant="outlined" /></th>
                    <td></td>
                </tr>
                <tr>
                    <th><TextField id="outlined-basic" label="닉네임" variant="outlined" /></th>
                    <td><CustomBtn id="dupl-id-btn" title="중복 체크"/></td>
                </tr>
                <tr>
                    <th></th>
                    <td></td>
                </tr>
            </table>
        </div>
    );
}

export default InputArea;