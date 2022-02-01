import React from "react";
import { makeStyles } from "@mui/styles";
import { style } from "./style";
import { i18n } from "../../translations/i18n";
import { night, sun } from "../../utils/icons";
import { Row, Col, Form, FormControl, Button } from "react-bootstrap";

const useStyles = makeStyles(style);

const Header = (props) => {

    const { setSearch, theme, toggleTheme, t } = props;

    const classes = useStyles();

    const onChange = (event) => {
        event.preventDefault();
        event.target.value === "he" ?
            (document.body.dir = i18n.dir("he")) :
            (document.body.dir = i18n.dir("en"))
        i18n.changeLanguage(event.target.value)
    };

    return (
        <Row>
            <Col>
                <Button
                    variant={theme === "dark" ? "dark" : "light"}
                    size="sm"
                    type="button"
                    onClick={toggleTheme}
                    className={classes.btn}
                >
                    {theme === "dark" ? sun : night}
                </Button>
            </Col>

            <Col>
                <FormControl
                    className={classes.input}
                    size="sm"
                    type="text"
                    placeholder={t("search")}
                    onChange={(e) => {
                        setSearch(e.target.value);
                    }}
                />
            </Col>
            <Col>
                <Form.Select className={classes.select} size="sm" onChange={onChange}>
                    <option value="en">English</option>
                    <option value="he">עברית</option>
                </Form.Select>
            </Col>
        </Row>
    );
};
export default Header;
