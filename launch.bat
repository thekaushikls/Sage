@echo off

:start
cls
set /p input="Select [C]reator or [D]eveloper mode? "

if "%input%" == "C" goto creator
if "%input%" == "c" goto creator
if "%input%" == "D" goto developer
if "%input%" == "d" goto developer
goto end

:creator
echo Launching Obsidian...
::start "" "obsidian://open?vault=sage"
%CD%\env\Scripts\activate && start brave "http://127.0.0.1:8000/Sage/" && mkdocs serve
goto end

:developer
echo Opening Visual Studio Code...
code .
goto end

:end
echo Exiting...
exit /b
