@echo off
start "" "obsidian://open?vault=sage"
%CD%\env\Scripts\activate  && start "" "http://127.0.0.1:8000/Sage/" && mkdocs serve
