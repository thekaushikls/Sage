@echo off
start "" "obsidian://open?vault=docs"
%CD%\env\Scripts\activate  && start "" "http://127.0.0.1:8000/SecondBrain/" && mkdocs serve
