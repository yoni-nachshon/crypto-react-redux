import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { style } from "./style";
import { i18n } from "../../translations/i18n";
import { night, sun } from "../../utils/icons";
import { Row, Col, FormControl, Button, ButtonGroup } from "react-bootstrap";

const useStyles = makeStyles(style);

const Header = (props) => {
    const { setSearch, theme, toggleTheme, t } = props;

    const classes = useStyles({
        theme: theme,
    });
    useEffect(() => { });

    const onClick = (event) => {
        event.preventDefault();
        event.target.value === "he"
            ? (document.body.dir = i18n.dir("he"))
            : (document.body.dir = i18n.dir("en"));
        i18n.changeLanguage(event.target.value);
    };

    return (
        <Row>
            <Col>
                <button type="button"
                    onClick={toggleTheme}
                    className={classes.btn}>
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
                <ButtonGroup className={classes.select} size="sm">
                    <Button
                        variant={theme === "dark" ? "dark" : "light"}
                        value={"en"}
                        onClick={onClick}
                    >
                        English
                    </Button>
                    <Button
                        variant={theme === "dark" ? "dark" : "light"}
                        value={"he"}
                        onClick={onClick}
                    >
                        עברית
                    </Button>
                </ButtonGroup>
            </Col>
        </Row>
    );
};
export default Header;
