<?php
/**
 * Created by PhpStorm.
 * User: trisb
 * Date: 13/11/2016
 * Time: 11:15
 */

class usuario {

    // completar con funcionalidad de cliente

    public function getSelectUsuario($param) {
        $json = FALSE;
        extract($param);
        $select = "";
        $select .= "<option value='0'>Seleccione un usuario</option>";
        foreach ($conexion->getPDO()->query("SELECT id_usuario, nombre, apellido FROM usuario ORDER BY apellido") as $fila) {
            $name = $fila['nombre'].' '.$fila['apellido'];
            $select .= "<option value='{$fila['id_usuario']}'>{$name}</option>";
        }
        echo $json ? json_encode($select) : ("<select id='$id'>$select</select>");
    }

}
