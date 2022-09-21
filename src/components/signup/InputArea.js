import { TextField } from "@material-ui/core";
import { CustomBtn } from '../common';
const InputArea = (props) => {
    return (
        <div className="InputArea">
            <table>
                <tr>
                    <th>
                        <TextField id="outlined-basic"
                        label="아이디" 
                        variant="outlined"
                        onChange={props.writeId} />
                    </th>
                    <td>
                        <CustomBtn 
                        id="dupl-id-btn" 
                        title="중복 체크"
                        clickEvt={props.duplId}/></td>
                </tr>
                <tr>
                    <th>
                        <TextField 
                        type="password" 
                        id="outlined-basic" 
                        label="비밀번호" 
                        variant="outlined"
                        onChange={props.writePw} />
                    </th>
                    <td></td>
                </tr>
                <tr>
                    <th>
                        <TextField 
                        type="password" 
                        id="outlined-basic" 
                        label="비밀번호 재입력" 
                        variant="outlined" 
                        onChange={props.writePwRe}/>
                    </th>
                    {props.isSamePw ? <td>사용가능</td> : <td>사용불가</td>}
                </tr>
                <tr>
                    <th>
                        <TextField 
                        id="outlined-basic" 
                        label="이름" 
                        variant="outlined" 
                        onChange={props.writeName}/>
                    </th>
                    <td></td>
                </tr>
                <tr>
                    <th>
                        <TextField 
                        id="outlined-basic" 
                        label="닉네임" 
                        variant="outlined" 
                        onChange={props.writeNick}/></th>
                    <td>
                        <CustomBtn 
                        id="dupl-id-btn" 
                        title="중복 체크"
                        clickEvt={props.duplNick}/>
                    </td>
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