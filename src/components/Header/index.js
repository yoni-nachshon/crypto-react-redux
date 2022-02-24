import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { style } from "./style";
import { i18n } from "../../translations/i18n";
import { night, sun } from "../../utils/icons";
import { Row, Col, FormControl, Button, ButtonGroup } from "react-bootstrap";

const useStyles = makeStyles(style);

const Header = (props) => {
    const { setSearch, theme, toggleTheme, t } = props;

   const storage = localStorage.getItem("i18nextLng")

    const classes = useStyles({
        theme: theme,
        storage: storage,
    });
    useEffect(() => { });

    const onClick = (event) => {
        event.preventDefault();
        event.target.value === "he" ? 
        (document.body.dir = i18n.dir("he")) : 
        (document.body.dir = i18n.dir("en"))
        i18n.changeLanguage(event.target.value);
    };

    return (
        <Row className={classes.header}>
            <Col>
                <button
                    type="button"
                    onClick={toggleTheme}
                    className={classes.btn}
                >
                    {theme === "dark" ? sun : night}
                </button>
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
                <Button
                    className={classes.lng} size="sm"
                    variant={theme === "dark" ? "dark" : "light"}
                    value={storage === "en" ? "he" : "en"}
                    onClick={onClick}
                >
                    {storage === "en" ? "עברית" : "English"}
                </Button>
            </Col>
        </Row>
    );
};
export default Header;
